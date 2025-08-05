
import './App.css'

function App() {

  return (
    <>
      <div style={{ background: "#dfe6e9", height: "100vh" }}>
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: 20 }}>
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
        <ProfileCard />
      </div>
    </>
  )

}

// structuring your app into components 
// defining a state of your application
const style = { width: 400, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, justifyContent: "center", padding: 20 }

function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: 'flex' }}>
        <img src={'https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg'} style={{
          width: 40,
          height: 40,
          borderRadius: 200
        }} />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>100xdevs</b>
          <div>23,777 followers</div>
          <div>12m</div>
        </div>
      </div>
      <div style={{ fontSize: 18 }}>
        Want to know how to win big? Check out how these folks won $6000 in bounties.
      </div>
    </div>
  )

}

function ProfileCard() {
  return(
    <>
      <div style={{height: "300px", width: "300px", background: "#fff"}}>
        <div style={{background: "#d4d2d2ff", height: "35%"}}>b</div>
        <img src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" style={{width: 60, height: 60, position:"relative", top: -32, borderRadius:50, left: 110}} />
        <h2>Harkirat Singh</h2>
        <p>Working with webRTC</p>
      </div>
    </>
  )
}

export default App
