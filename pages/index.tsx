import ActionBar from '../components/ActionBar';
import FileGrid from '../components/FileGrid';
import HomeLayout from '../layouts/Home';
// import styles from './style.module.css';

export default function Home() {
  return (
    <HomeLayout>
      <ActionBar />
      <FileGrid />
    </HomeLayout>
  )
}



