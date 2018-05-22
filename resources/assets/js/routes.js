import Home from './components/Hello.vue'
import Novel from './components/Novel.vue'
import NovelList from './components/NovelList.vue'
import MarkDown from './components/MarkDown.vue'


const routes = [
    {
        path: '/',
        component: NovelList
    },
    {
        path: '/novel',
        component: Novel
    },
    {
        path: '/novel:id',
        component: Novel
    }
]

export default routes