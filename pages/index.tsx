import type { NextPage } from 'next'
import Head from 'next/head'
import Todos from '../components/todos'

const Home: NextPage = () => {
  return (<Todos heading="Todo Application" />)
}

export default Home 
