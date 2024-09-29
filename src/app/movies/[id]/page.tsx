export default function Movies({ params }: { params: { id: string } }) {
  return <div className='mt-24 text-black'>Movie ID: {params.id}</div>
}
