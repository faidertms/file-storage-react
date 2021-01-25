import FileGrid from '../components/FileGrid';
import HomeLayout from '../layouts/Home';
import { FileContextProvider } from '../contexts/File';
export default function Home(): JSX.Element {
  return (
    <FileContextProvider>
      <HomeLayout>
        <FileGrid />
      </HomeLayout>
    </FileContextProvider>
  )
}



