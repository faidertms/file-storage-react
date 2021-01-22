import ActionBar from '../components/ActionBar';
import FileGrid from '../components/FileGrid';
import HomeLayout from '../layouts/Home';
import { FileContextProvider } from '../contexts/File';

export default function Home() {
  return (
    <FileContextProvider>
      <HomeLayout>
        <ActionBar />
        <FileGrid />
      </HomeLayout>
    </FileContextProvider>
  )
}



