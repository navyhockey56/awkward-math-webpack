import React from 'react';
import { Route } from 'react-router-dom';
import AppNav from './components/AppNav';
import ArtOfMathProofPage from './components/art-of-math-proof-page/ArtOfMathProofPage';
import AwkwardStateMachinesPage from './components/awkward-state-machines-page/AwkwardStateMachinesPage';
import ColorGraphingPage from './components/color-graphing-page/ColorGraphingPage';
import HomePage from './components/home-page/HomePage';
import VideosPage from './components/videos-page/VideosPage';

export default function App() {
  return (
    <>
      <AppNav />
      <Route path="/" exact component={HomePage} />
      <Route path="/art-of-math-proof" component={ArtOfMathProofPage} />
      <Route path="/awkward-state-machines" component={AwkwardStateMachinesPage} />
      <Route path="/color-graphing" component={ColorGraphingPage} />
      <Route path="/videos" component={VideosPage} />
    </>
  );
}
