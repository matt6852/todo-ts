import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from "react-query"
import { API } from "../api/usersApi"
import { useState } from "react"
import { ReactQueryDevtools } from 'react-query/devtools'


const Query = () => {
 const queryClient = new QueryClient()




 return (
  <QueryClientProvider client={queryClient}>
   <App />
   <ReactQueryDevtools initialIsOpen={false} />

  </QueryClientProvider>
 )
}

export default Query


const App = () => {
 const queryClient = useQueryClient()
 const { data, isLoading, isError, error } = useQuery('blogs', API.getAllBlogs)
 const { mutate: createBlog, error: createBlogError } = useMutation(API.createBlog, {
  onSuccess() {
   queryClient.invalidateQueries("blogs")
   setForm({ name: '', description: "", websiteUrl: "" })
  }
 })
 const { mutate: deleteBlog, error: deleteBlogError } = useMutation(API.deleteBlog, {
  onSuccess() {
   queryClient.invalidateQueries("blogs")
  }
 })
 console.log(createBlogError, "result");

 const [form, setForm] = useState({ name: '', description: "", websiteUrl: "" })
 console.log(data);
 const onSubmit = (e) => {
  e.preventDefault()
  createBlog(form)

 }

 const handleFormInputs = (e) => {
  const name = e.target.name
  const value = e.target.value
  setForm({ ...form, [name]: value })
 }

 let content
 if (isLoading) {
  content = <h1>Loading...</h1>
 }
 if (isError) {
  content = <h1>{error?.message}</h1>
 }
 if (data?.items?.length && data.items) {
  content = data.items && data.items.map((b) => <div key={b.id}>
   <h1>name:{b.name}</h1>
   <h1>description:{b.description}</h1>
   <h1>website:{b.websiteUrl}</h1>
   <button onClick={() => deleteBlog(b.id)} className="border bg-orange-700">delete</button>
  </div>
  )
 }
 return <div>
  <h1>QueryClient</h1>
  <div>
   <form onSubmit={onSubmit}>
    <input type="text" onChange={handleFormInputs} name="name" value={form.name} className="border" />
    <input type="text" onChange={handleFormInputs} name="description" value={form.description} className="border" />
    <input type="text" onChange={handleFormInputs} className="border" name="websiteUrl" value={form.websiteUrl} />
    <button type="submit" className="border">submit</button>
   </form>
  </div>
  <div>
   {content}

  </div>
 </div>
}
