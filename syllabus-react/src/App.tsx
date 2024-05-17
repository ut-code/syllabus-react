import './App.css'
import { Timetable } from './components/Timetable'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
      <MantineProvider> {/* Mantineの機能を使う際必須の記述 */}
          <Timetable/>
      </MantineProvider>
  )
}

export default App
