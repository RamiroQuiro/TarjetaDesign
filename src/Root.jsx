import { Link,Outlet,RootRoute } from "@tanstack/react-query";

const rootRoute = new RootRoute({
    component: Root,
  })
  

export default function Root() {
    return (
      <>
        <div>
          <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <hr />
        <Outlet />
      </>
    )
  }
  
