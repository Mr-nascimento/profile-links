import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'
import './App.scss'
import { CardLink } from './components/CardsLinks'

const socialNetworks = [
    {
        name: '@mr.igornascimento',
        url: 'https://www.instagram.com/mr.igornascimento/',
        icon: <InstagramLogo size={32} color='#fff'/>
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/igor.santos.1884787',
        icon: <FacebookLogo size={32} color='var(--white)'/>
    },
    {
        name: 'Github',
        url: 'https://github.com/Mr-nascimento',
        icon: <GithubLogo size={32} color='#fff' />
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/mr-igor-nascimento/',
        icon: <LinkedinLogo size={32} color='var(--white)' />

    },
    {
      name: '(73) 98189-2951',
      url: 'https://api.whatsapp.com/send?phone=5573981892951',
      icon: <WhatsappLogo size={32} color='var(--white)' />
    }
    
]


function App() {

  return (
    <>
    <div className='container'>
      <div className='profilePhoto'>
        <img src="https://avatars.githubusercontent.com/mr-nascimento" alt="Igor Nascimento" />
      </div>
    {socialNetworks.map(link =>{
      return (
        <CardLink name={link.name} url={link.url} icon={link.icon} />)
    })}      
    </div>
    </>
  )
}

export default App
