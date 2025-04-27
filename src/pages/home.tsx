import Spline from '@splinetool/react-spline';

function Home() {
    function onMousePress(e:any) {
        if (e.target.name === 'ProjectsFolder') {
          alert('I have been clicked!');
        }
    }
    return (
        <div className="w-full h-[calc(100vh-4rem)]">
            <Spline scene="https://prod.spline.design/3Evwac6TAsSRYVwC/scene.splinecode" 
            onSplineMouseDown={onMousePress}
            />
        </div>
    );
}
export default Home;