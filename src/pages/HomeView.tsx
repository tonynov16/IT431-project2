export default function HomeView() {
  return (
    <div>
      {/* TODO: Replace with your own landing-page copy. Tell a first-time
          visitor what this app does and why they'd use it. */}
      <h1>Welcome to The Greatest Hits</h1>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <img
        src="https://cdn.pixabay.com/photo/2016/08/15/16/48/vinyl-1595847_1280.jpg"
        alt="a picture of various vinyls"
        style={{width: '100%', maxWidth: 600, borderRadius: 12}}

      />
    </div>

      <p>
        This is a website where users can share their favorite albums of all time. 
        Registered users can add their favorite albums. Users can also edit other registered
        submissions in case they got any information wrong. The website is already loaded with 
        the creators top 5 albums of all time. If you're not a registered user, you can still view the list of albums that are 
        recommended by other registered users. To contribute, you can register an account and add your favorite album. 
        Happy listening!
      </p>
    </div>
  );
}
