import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate();
    function onMousePress(e:any) {
        if (e.target.name === 'ProjectsFolder') {
          navigate('/projects');
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