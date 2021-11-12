 import './App.css';
 import CloseIcon from '@mui/icons-material/Close';
 import DoneIcon from '@mui/icons-material/Done';
 import Button from '@mui/material/Button';

function App() {
  let list = [["Free", "$0", "Single User",
    "5GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "false-Unlimited Private Projects",
    "false-Dedicated Phone Support",
    "false-Free Subdomain",
    "false-Monthly Status Reports"],
    ["Free", "$0","5 Users",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "false-Monthly Status Reports"],
    ["Free", "$0","Unlimited User",
    "150GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Unlimited Free Subdomains",
    "Monthly Status Reports"]
  ]
  return (
    <div className="container">
      {list.map(e => <Display input={e}/>)}
    </div>
  );
}

function Display({input}) {
  console.log(input)
  return(
    <div class="card" >
    <div class="card-body">
    <h5 class="card-title">{input[0]}<br/>{input[1]}/Month</h5>
    <hr/>
    {(input.slice(2,input.length).map(e => {
       return e.includes("false") ? <p class="card-text"><CloseIcon />{e.slice(6)}</p> : <p class="card-text"><DoneIcon />{e}</p>
    }))}
    <div class="d-grid">
      <a href="#" class="btn btn-primary text-uppercase">Button</a>
    </div>
  </div>
</div>
  );
}
export default App;
 