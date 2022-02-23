import hulahop from '../img/portImages/hulahop.PNG';
import chatapp from '../img/portImages/chatapp.png';
import miniprojects from '../img/portImages/miniprojects.PNG'
import todolist from '../img/portImages/todolist.PNG'

const portfolios = [
    {
        id: 1,
        category: 'Wordpress',
        image: hulahop,
        link1: 'https://hula-hop.ro/',
        title: 'Aborad Products',
        text: 'Hula-Hop & Max-Meyer was created in Worpdress with a bit of HTML implemented.'
    },
    {
        id: 2,
        category: 'HTML / CSS / JS',
        image: miniprojects,
        link1: 'https://vladtimofte.github.io/50Projects',
        title: 'Peronal mini-projects',
        text: 'Created in pure HTML, JS and CSS'
    },
    {
        id: 3,
        category: 'React',
        image: chatapp,
        link1: 'https://vladtimofte.github.io/React/',
        title: 'Chat App',
        text: 'Personal chat-app created in react.'
    },
    {
        id: 4,
        category: 'React',
        image: todolist,
        link1: 'https://vladtimofte.github.io/React/',
        title: 'TODO List',
        text: 'Personal Todo List created in React'
    }
]

export default portfolios;