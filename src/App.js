import './App.css';
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField} from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Questionário</h2>
        <h3>Por gentileza, responda as seguintes questões:</h3>
      </header>
      <div className="Form">
        <form className="Texto" autoComplete="off">
          <TextField id="nome" label="Nome Completo"/> <br/>
          <TextField id="email" label="E-mail"/>
        </form>
        <FormControl component="fieldset">
        <FormLabel component="legend" color="black | black">De modo geral, como você avalia a qualidade do atendimento ao cliente realizado por nossa empresa?</FormLabel>
        <RadioGroup aria-label="p" name="p1">
          <FormControlLabel value="0" control={<Radio />} label="Muito bom" />
          <FormControlLabel value="1" control={<Radio />} label="Apenas um pouco bom" />
          <FormControlLabel value="2" control={<Radio />} label="Um pouco ruim" />
          <FormControlLabel value="3" control={<Radio />} label="Muito ruim" />
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
        <FormLabel component="legend"> Nossos atendentes conseguem captar adequadamente suas dúvidas e preocupações?</FormLabel>
        <RadioGroup aria-label="p" name="p2">
          <FormControlLabel value="0" control={<Radio />} label="Muito bom" />
          <FormControlLabel value="1" control={<Radio />} label="Apenas um pouco bom" />
          <FormControlLabel value="2" control={<Radio />} label="Um pouco ruim" />
          <FormControlLabel value="3" control={<Radio />} label="Muito ruim" />
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
        <FormLabel component="legend"> Quanto tempo foi necessário esperar para que suas dúvidas e problemas fossem resolvidos?</FormLabel>
        <RadioGroup aria-label="p" name="p3">
          <FormControlLabel value="0" control={<Radio />} label="Muito menos do que o esperado" />
          <FormControlLabel value="1" control={<Radio />} label="Menos do que o esperado" />
          <FormControlLabel value="2" control={<Radio />} label="Mais do que o esperado" />
          <FormControlLabel value="3" control={<Radio />} label="Muito mais do que o esperado" />
          <FormControlLabel value="4" control={<Radio />} label="Não houve resposta da empresa" />
        </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
        <FormLabel component="legend">De modo geral, como você avalia a qualidade do atendimento ao cliente realizado por nossa empresa?</FormLabel>
        <RadioGroup aria-label="p" name="p4">
          <FormControlLabel value="0" control={<Radio />} label="Muito satisfeito" />
          <FormControlLabel value="1" control={<Radio />} label="Até certo ponto satisfeito" />
          <FormControlLabel value="2" control={<Radio />} label="Pouco insatisfeito" />
          <FormControlLabel value="3" control={<Radio />} label="Muito insatisfeito" />
        </RadioGroup>
        </FormControl>
        <div className="Enviar">
          <Button variant="contained">Enviar</Button>
        </div>
      </div>
    </div>
  );
}

export default App;