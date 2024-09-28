export default function Movies() {
  return (
    <div>
      <ul className='flex'>
        {['Now Playing', 'Popular', 'Top Rated', 'Upcoming'].map((item) => (
          <li key={crypto.randomUUID()}>{item}</li>
        ))}{' '}
      </ul>
    </div>
  )
}
