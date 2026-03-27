function App() {
  return (

<div style={{
backgroundImage: "url('AI2.jpeg')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
height: "100vh",
display: "flex",
flexDirection: "column",
alignItems: "center"
}}>

<table style={{
marginTop: "100px",
marginLeft: "25px",
marginBottom: "80px",
width: "1100px",
background: "rgb(21,21,21)",
boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
borderRadius: "4px",
overflow: "hidden",
height: "395px",
border: "2px solid black"
}}>

<tr>
<th style={{backgroundColor:"rgb(58,45,139)",color:"beige",WebkitTextStroke:"0.1px black"}}>Time</th>
<th style={{backgroundColor:"rgb(58,45,139)",color:"beige",WebkitTextStroke:"0.1px black"}}>Monday</th>
<th style={{backgroundColor:"rgb(58,45,139)",color:"beige",WebkitTextStroke:"0.1px black"}}>Tuesday</th>
<th style={{backgroundColor:"rgb(58,45,139)",color:"beige",WebkitTextStroke:"0.1px black"}}>Wednasday</th>
<th style={{backgroundColor:"rgb(58,45,139)",color:"beige",WebkitTextStroke:"0.1px black"}}>Thursday</th>
<th style={{backgroundColor:"rgb(58,45,139)",color:"beige",WebkitTextStroke:"0.1px black"}}>Friday</th>
<th style={{backgroundColor:"rgb(58,45,139)",color:"beige",WebkitTextStroke:"0.1px black"}}>Saturday</th>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"white"}}>8:30 To 9:30</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Grooming and personality<br/>(Room no.505)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Digital marketing<br/>(Room no.107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Digital marketing<br/>(Room no.505)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Operating System<br/>(Room no.505)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Operating System<br/>(Room no.505)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Operating System<br/>(Room no.505)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>9:30 To 10:15</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Python programming<br/>(Room no.505)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Python programming<br/>(Room no.107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Python programming<br/>(Room no.107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Python programming<br/>(Room no.505)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Python programming<br/>(Room no.107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Operating System<br/>(Room no.505)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"white"}}>10:15 To 11:00</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Data handling<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Data handling<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Data handling<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Data handling<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Data handling<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Digital marketing<br/>(Room 107 Lab)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>11:00 To 12:00</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>AI automation<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>AI automation<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>AI automation<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>AI automation<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>AI automation<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Ossis hour<br/>(Room 505)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"white"}}>12:00 To 12:30</td>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>Break</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"rgb(58,45,139)",color:"beige"}}>12:30 To 01:20</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Dynamic web<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Dynamic web<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Dynamic web<br/>(Room 507)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Dynamic web<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Dynamic web<br/>(Room 107 Lab)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Ossis hours<br/>(Room 505)</td>
</tr>

</table>

</div>

  );
}

export default App;