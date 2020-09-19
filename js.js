






var table=[1,2,3,4,5,6,7,8,9 ]



function change(num)
{

    
    
    //invalid input
    if(table[num]==="x" || table[num]==="o")
    {
      
        alert("this place is already filled");
    }
   
    //valid input
    else{
        var i =document.getElementById(num);
        i.src="x.jpg";
    
        table[num]="x";
        
   
        
    
        //checking after you input
        if( ( table[0] == table[1] && table[2] =="x" && table[0]==table[2] ) ||  ( table[0] == table[3] && table[0]== table[6] &&table[6] =="x"  )  ||  (table[0] == table[4] &&table[4] == table[8] && table[8]=="x")    ||   (table[3] == table[4] && table[4]==table[5]&&table[5] =="x") ||  (table[6] == table[7]&&table[7] == table[8]&&table[8] =="x")   ||   (table[1] == table[4]&&table[4] == table[7]&&table[7] =="x")    ||   (table[2]== table[4]&&table[4] == table[6]&&table[6] =="x")    ||   (table[8]== table[5]&& table[5] == table[2]&&table[2] =="x"))    
        {
            alert("you wan");
            window.location="mian.html";
            //break;

        }

        //cpu checking user winning case if winning try to make it safe
        var cc;
        for(i=0;i<=8;i++)
        {
            if( table[i]!="x" && table[i]!="o" )
            { 
                    table[i]="x";
                    if( ( table[0] == table[1] && table[2] =="x" && table[0]==table[2] ) ||  ( table[0] == table[3] && table[0]== table[6] &&table[6] =="x"  )  ||  (table[0] == table[4] &&table[4] == table[8] && table[8]=="x")    ||   (table[3] == table[4] && table[4]==table[5]&&table[5] =="x") ||  (table[6] == table[7]&&table[7] == table[8]&&table[8] =="x")   ||   (table[1] == table[4]&&table[4] == table[7]&&table[7] =="x")    ||   (table[2]== table[4]&&table[4] == table[6]&&table[6] =="x")    ||   (table[8]== table[5]&& table[5] == table[2]&&table[2] =="x"))    
                    {
                     cc=1;
                    }
                 //break is user will win in next move and make the place safe
                    if(cc==1)
                    {
                        var ss=document.getElementById(i);
                        ss.src="o.jpg";
                        table[i]="o";
                        
                        if( ( table[0] == table[1] && table[2] =="O" && table[0]==table[2] ) ||  ( table[0] == table[3] && table[0]== table[6] &&table[6] =="O"  )  ||  (table[0] == table[4] &&table[4] == table[8] && table[8]=="O")    ||   (table[3] == table[4] && table[4]==table[5]&&table[5] =="O") ||  (table[6] == table[7]&&table[7] == table[8]&&table[8] =="O")   ||   (table[1] == table[4]&&table[4] == table[7]&&table[7] =="O")    ||   (table[2]== table[4]&&table[4] == table[6]&&table[6] =="O")    ||   (table[8]== table[5]&& table[5] == table[2]&&table[2] =="O"))
        {
            alert("COMPUTER WON");
            window.location="mian.html";
        }    
                        break;
                    }
                    
                
                    table[i]=9;
             
            }


        }

        //or input random value to continue
        if(cc!=1)
        {
        for(i=0;i<=8;i++)
        {
            if( table[i]!="x" && table[i]!="o" )
            {
                
        
                table[i]="o";
                
                
                var sa = document.getElementById(i);
                sa.src="o.jpg";
                if( ( table[0] == table[1] && table[2] =="O" && table[0]==table[2] ) ||  ( table[0] == table[3] && table[0]== table[6] &&table[6] =="O"  )  ||  (table[0] == table[4] &&table[4] == table[8] && table[8]=="O")    ||   (table[3] == table[4] && table[4]==table[5]&&table[5] =="O") ||  (table[6] == table[7]&&table[7] == table[8]&&table[8] =="O")   ||   (table[1] == table[4]&&table[4] == table[7]&&table[7] =="O")    ||   (table[2]== table[4]&&table[4] == table[6]&&table[6] =="O")    ||   (table[8]== table[5]&& table[5] == table[2]&&table[2] =="O"))
                {
                alert("COMPUTER WON");
                Window.location="mian.html";
                }    

                break;
            }
        }
        }
      
        
                    

        

    }
    
   
}


            


