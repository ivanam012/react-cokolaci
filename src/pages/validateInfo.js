export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Unesite username';
    }
    
    if (!values.email) {
      errors.email = 'Unesite email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email adresa nije validna';
    }
    if (!values.password) {
      errors.password = 'Unesite lozinku';
    } else if (values.password.length < 6) {
      errors.password = 'Lozinka mora da ima više od 6 karaktera';
    }
  
    if (!values.password2) {
      errors.password2 = 'Ponovo unesite lozinku';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Lozinke se ne poklapaju';
    }
    return errors;
  }