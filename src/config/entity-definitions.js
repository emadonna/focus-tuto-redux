export const user = {
  uuid: {
    domain: 'DO_ID',
    isRequired: true
  },
  firstName: {
    domain: 'DO_TEXTE',
    isRequired: true
  },
  lastName: {
    domain: 'DO_TEXTE',
    isRequired: true
  }
}

export const address = {
  uuid: {
    domain: 'DO_ID',
    isRequired: true
  },
  city: {
    domain: 'DO_TEXTE',
    isRequired: true
  }
}

export const finance = {
  name:  {
    domain: 'DO_TEXTE',
    isRequired: true
  },
  amount:  {
    domain: 'DO_AMOUNT',
    isRequired: true
  },
  currency:  {
    domain: 'DO_SYMBOL',
    isRequired: true
  },
  moves:{
    redirect: ['financialMove']
  }
}


export const financialMove = {
  transactionType: {
    domain: 'DO_CODE',
    isRequired: true
  },
  amount: {
    domain: 'DO_MONTANT',
    isRequired: true
  }
}
