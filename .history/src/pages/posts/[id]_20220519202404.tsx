import {useRouter} from 'next/router'

export default function Post() {
    return (
      <div>
            <h1>Post { router.querry}</h1>
      </div>
    );
  }
  