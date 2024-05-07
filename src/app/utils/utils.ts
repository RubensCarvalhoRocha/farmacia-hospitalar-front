// Crie uma instância do Notyf
import { Notyf } from 'notyf';

const notyf = new Notyf({
    duration: 2000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'success',
        background: '#3DC763',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'check_circle',
          color: 'white',
        },
      },
      {
        type: 'warning', // Adicionando um novo tipo chamado 'warning'
        background: 'orange',
        icon: {
          className: 'material-icons',
          tagName: 'i',
          text: 'warning',
        },
      },
      {
        type: 'error',
        background: 'indianred',
        duration: 10000,
        dismissible: true,
      },
    ],
  });

  export default notyf;
