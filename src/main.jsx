import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const tracks=[
 {title:'Midnight Drive',artist:'TROVE Radio',time:'3:42'},
 {title:'Afterglow',artist:'Luna Vale',time:'4:08'},
 {title:'City Lights',artist:'Neon Hours',time:'3:51'},
 {title:'Monsoon',artist:'Aarav',time:'4:21'},
 {title:'Golden',artist:'Mira',time:'3:36'},
];

function App(){
 const [playing,setPlaying]=useState(null); const [query,setQuery]=useState('');
 const visible=tracks.filter(t=>(t.title+' '+t.artist).toLowerCase().includes(query.toLowerCase()));
 return <div className="app">
  <aside><div className="logo">TROVE<span>•</span></div><nav><a className="active">⌂ Home</a><a>⌕ Discover</a><a>♡ Library</a></nav><div className="side-title">YOUR MUSIC</div><a>Recently played</a><a>Liked songs</a><a>Playlists</a></aside>
  <main><header><div className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search songs, artists, albums"/></div><button className="login" onClick={()=>alert('Authentication can be connected here.')}>Sign in</button></header>
   <section className="hero"><div><p className="eyebrow">YOUR DAILY SOUNDTRACK</p><h1>Find something<br/><i>worth keeping.</i></h1><p className="sub">Discover music for every mood, moment and memory.</p><button className="primary" onClick={()=>setPlaying(tracks[0])}>▶ Start listening</button></div><div className="orb"><div className="orb-inner">T</div></div></section>
   <section><div className="section-head"><h2>Trending now</h2><button>See all →</button></div><div className="grid">{visible.map((t,i)=><article className="card" key={t.title}><div className={'cover c'+i}><span>{String(i+1).padStart(2,'0')}</span></div><div className="track"><div><b>{t.title}</b><small>{t.artist}</small></div><button onClick={()=>setPlaying(playing?.title===t.title?null:t)}> {playing?.title===t.title?'❚❚':'▶'} </button></div></article>)}</div></section>
  </main>
  {playing&&<div className="player"><div><b>{playing.title}</b><small>{playing.artist}</small></div><button onClick={()=>setPlaying(null)}>✕</button><div className="progress"><span></span></div><small>{playing.time}</small></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
