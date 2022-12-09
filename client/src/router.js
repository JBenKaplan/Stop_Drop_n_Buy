import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import AboutPage from './pages/AboutPage'
import ViewPlatforms from './pages/ViewPlatforms'
import PlatformDetails from './pages/PlatformDetails'

const routes = [
  { path: '/', component: HomePage, name: 'Homepage' },
  { path: '/games/:genre_id', component: ViewGames, name: 'ViewGames' },
  { path: '/details/:game_id', component: GameDetails, name: 'GameDetails' },
  { path: '/platforms', component: ViewPlatforms, name: 'ViewPlatforms' },
  {
    path: '/platformDetails/:platform_id',
    component: PlatformDetails,
    name: 'PlatformDetails'
  },
  { path: '/about', component: AboutPage, name: 'AboutPage' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
