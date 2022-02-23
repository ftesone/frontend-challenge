
import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";
import { useState } from "react";

import './App.css';

export default function App() {
    const [focusable, setFocusable] = useState(false);

  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
        <label htmlFor="focusable">
            <input type="checkbox" id="focusable" checked={focusable} onChange={event => setFocusable(event.target.checked)} />
            Focus input
        </label>
      <FocusableInput focusable={focusable} />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
    </div>
  );
}
