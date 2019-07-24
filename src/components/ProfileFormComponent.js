import React from 'react';


class ProfileForm extends React.Component{

    state = {
        firstName: ''
    }

    handleChange= e => {
        console.log({
            name: e.target.name,
            value: e.target.value
        });
        
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    
    handleClick = e =>{
           console.log("El botón ha sido presionado");
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("El formulario hizo submit");
    }
    render(){
        return(
            <div>
                <h1>Nuevo Asistente</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellidos</label>
                        <input
                            onChange={this.handleChange}    
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>¿En qué trabajas?</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.state.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.state.twitter}
                        />
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                </form>
            </div>
           
        );
    }
}

export default ProfileForm;