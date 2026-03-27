function App() {
  return (

<div style={{
backgroundImage: "url('BA2.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center"
}}>

<table style={{
marginTop: "80px",
width: "1150px",
background: "black",
boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
borderRadius: "4px",
overflow: "hidden",
height: "400px",
border: "2px solid black"
}}>

<tr>
<th style={{backgroundColor:"rgb(52,172,142)",color:"rgb(5,69,17)"}}>Time</th>
<th style={{backgroundColor:"rgb(52,172,142)",color:"rgb(5,69,17)"}}>Monday</th>
<th style={{backgroundColor:"rgb(52,172,142)",color:"rgb(5,69,17)"}}>Tuesday</th>
<th style={{backgroundColor:"rgb(52,172,142)",color:"rgb(5,69,17)"}}>Wednesday</th>
<th style={{backgroundColor:"rgb(52,172,142)",color:"rgb(5,69,17)"}}>Thursday</th>
<th style={{backgroundColor:"rgb(52,172,142)",color:"rgb(5,69,17)"}}>Friday</th>
<th style={{backgroundColor:"rgb(52,172,142)",color:"rgb(5,69,17)"}}>Saturday</th>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"white"}}>8:30 To 9:30</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>History<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>History<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Mathematics<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Mathematics<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Function grammar & composition<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Function grammar & composition<br/>(Room no.504)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"rgb(52,172,142)"}}>9:30 To 10:30</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Mathematics<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Mathematics<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>History<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>History<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Science & technology<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Science & technology<br/>(Room no.504)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"white"}}>10:30 To 11:00</td>
<td style={{textAlign:"center",backgroundColor:"rgb(7,193,112)"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(7,193,112)"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(7,193,112)"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(7,193,112)"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(7,193,112)"}}>Break</td>
<td style={{textAlign:"center",backgroundColor:"rgb(7,193,112)"}}>Break</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"rgb(52,172,142)"}}>11:00 To 11:45</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Geography of india<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Geography of india<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Geography of india<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Geography of india<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Science & technology<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Mathematics<br/>(Room no.504)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"white"}}>11:45 To 12:20</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Gandhi's political thought<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Gandhi's political thought<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Gandhi's political thought<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Science & technology<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Geography of india<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>History<br/>(Room no.504)</td>
</tr>

<tr>
<td style={{textAlign:"center",backgroundColor:"rgb(52,172,142)"}}>12:20 To 1:00</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Gujarati lekhan kaushal<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Gujarati lekhan kaushal<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Gujarati lekhan kaushal<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Gandhi's political thought<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"beige"}}>Gujarati lekhan kaushal<br/>(Room no.504)</td>
<td style={{textAlign:"center",backgroundColor:"white"}}>Gandhi's political thought<br/>(Room no.504)</td>
</tr>

</table>

</div>

  );
}

export default App;