import './App.css'
import { Timetable } from './components/Timetable'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { DoubleHeader } from './components/Header/DoubleHeader';
import { theme } from './theme';
import { FooterCentered } from './components/Footer/Footer';

function App() {
  return (
      <MantineProvider theme={theme}> {/* Mantineの機能を使う際必須の記述 */}
          <DoubleHeader/>
          <Timetable/>
          <FooterCentered/>
      </MantineProvider>
  )
}

export default App
