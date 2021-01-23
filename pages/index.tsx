import ActionBar from '../components/ActionBar';
import FileGrid from '../components/FileGrid';
import HomeLayout from '../layouts/Home';
import { FileContextProvider } from '../contexts/File';
import Loader from '../components/Loader';
export default function Home() {
  return (
    <FileContextProvider>
      <HomeLayout>
      <Loader/>
        <ActionBar />
        <FileGrid />
      </HomeLayout>
    </FileContextProvider>
  )
}



