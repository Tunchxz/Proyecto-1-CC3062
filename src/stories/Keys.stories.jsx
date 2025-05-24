import Keys from '../components/Keys'

export default {
    title: 'Componentes/Keys',
    component: Keys,
    argTypes: {
        onButtonClick: { action: 'clic en tecla' },
    },
}

// Historia 1: Tecla numérica
export const TeclaNumerica = {
    args: {
        label: '5',
        keyClass: '',
    },
}

// Historia 2: Tecla de operación
export const TeclaOperacion = {
    args: {
        label: '+',
        keyClass: '',
    },
}

// Historia 3: Tecla de igual con estilo especial
export const TeclaIgual = {
    args: {
        label: '=',
        keyClass: 'igual',
    },
}

// Historia 4: Tecla de borrar (Clear)
export const TeclaBorrar = {
    args: {
        label: 'C',
        keyClass: '',
    },
}
