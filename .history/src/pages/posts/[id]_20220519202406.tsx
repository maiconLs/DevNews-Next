import {useRouter} from 'next/router'

export default function Post() {
    return (
      <div>
            <h1>Post { router.querry.id}</h1>
      </div>
    );
  }
  