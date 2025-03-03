import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home.jsx';
import ChallengeOne from './pages/challenges/Challengeone.jsx';
import ChallengeTwo from './pages/challenges/ChallengeTwo.jsx';
import ChallengeThree from './pages/challenges/ChallengeThree.jsx';
import ChallengeFour from './pages/challenges/ChallengeFour.jsx';

const BrowserRoutes = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/c1',
            element: <ChallengeOne />,
        },
        {
            path: '/c2',
            element: <ChallengeTwo />,
        },
        {
            path: '/c3',
            element: <ChallengeThree />,
        },
        {
            path: '/c4',
            element: <ChallengeFour />,
        },
    ],
    {
        basename: '/reactjs/',
    }
);

export default BrowserRoutes;