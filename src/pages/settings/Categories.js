import { Alert, AlertTitle, Button, IconButton, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import styles from "../../styles/components/Settings.module.css";
import RemoveIcon from '@mui/icons-material/Remove';
import useMain from '../../MainContext';

const clrs = [
  "#f44336", "#e91e63", "#9c27b0", "#2196f3", "#3f51b5", "#673ab7", "#03a9f4", "#00bcd4", 
  "#ff9800", "#cddc39", "#004d40", "#1de9b6", "#00e5ff", "#e91e63", "#00b0ff", "#009688",
  "#00e676", "#2e7d32", "#ffc107", "#ffeb3b", "#f57f17", "#ff5722", "#795548", "#607d8b"
]

const Categories = () => {
  const { state } = useMain()
  const [categories, setCategories] = useState(state.project.categories || []);

  var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 9);
  };

  const handleAdd = () => setCategories(pr => pr.concat({ id: ID(), category: "aa", keywords: "", color: "#f57f17" }))
  const handleRemove = function () {
    console.log(this)
    setCategories(pr => pr.filter(f => f.id !== this.id))
  }

  const handleChange = function (e) {
    setCategories(pr => {
      let curr = pr.map(i => i.id).indexOf(this.id);
      pr[curr] = { ...pr[curr], [e.target.name]: e.target.value }
      return [...pr];
    })
  }

  console.log(categories)

  return (
    <div >
      <Alert severity="info">
        <AlertTitle>Categories</AlertTitle>
        We will search your email body (or title) for some keywords. The category with more keywords, will become the category of the email.
      </Alert>
      <form>
        <div className={styles["ctg-form-item"]} style={{background: "inherit", padding: "0px", paddingBottom: "2.4px"}}>
          <Button onClick={handleAdd} variant="outlined" style={{textTransform: "none"}}>add more</Button>
          <Button variant="contained" style={{textTransform: "none"}}>SAVE</Button>
        </div>
        {
          JSON.stringify(categories)
        }
        {
          categories.map((c, i) => {
            return (
              <div key={i} className={styles["ctg-form-item"]}>
                <TextField
                  inputProps={{name: "category"}}
                  size='small'
                  value={categories.find(f => f.id === c.id).category}
                  onChange={handleChange.bind({id: c.id})}
                  style={{width: "23%"}}
                  label="Category"
                />
                <Select
                  inputProps={{name: "color"}}
                  size='small'
                  value={categories.find(f => f.id === c.id).color}
                  onChange={handleChange.bind({id: c.id})}
                  style={{width: "14%"}}
                  label="Color"
                >
                {clrs.map((clr, ind) => <MenuItem value={clr} key={ind}>{clr}<span style={{background: clr, width: 14, height: 14}}></span></MenuItem>)}   
                </Select>
                <TextField
                  inputProps={{name: "keywords"}}
                  size='small'
                  value={categories.find(f => f.id === c.id).keywords}
                  onChange={handleChange.bind({id: c.id})}
                  style={{width: "56%"}}
                  label="Keywords"
                />
                <IconButton onClick={handleRemove.bind({id: c.id})}><RemoveIcon /></IconButton>
              </div>
            )
          })
        }
      </form>
    </div>
  );
}

export default Categories;
