import ControleRemoto from './ControleRemoto.js'
import { interfaceControlador } from './interfaceControlador.js'

let x = new ControleRemoto()
x.ligar()

x.maisVolume()
x.maisVolume()
x.menosVolume()

x.play()
x.pause()

x.ligarMudo()
x.desligarMudo()

x.abrirMenu()
x.fecharMenu()
