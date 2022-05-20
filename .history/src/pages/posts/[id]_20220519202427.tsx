import {useRouter} from 'next/router'

export default function Post() {
    const router = useRouter()
    return (
      <div>
            <h1>Post { router.querry.id}</h1>
      </div>
    );
  }
  