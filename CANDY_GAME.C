/*
				      AUTHOR: Ruchit Patel
				      SUBJECT:Candy Game
				      DATE:2/05/2024


*/
#include<stdio.h>
#include<conio.h>
void main()
{
	int candyX=40,candyY=1,boxX=40,boxY=20,score=0,lifeline=3,d;
	char ch;
	textbackground(GREEN);
	start:
	clrscr();
	gotoxy(60,5);
	cprintf("SCORE=%d",score);

	gotoxy(60,6);
	cprintf("LIFELINE=%d",lifeline);
       //second  bucket
	gotoxy(candyX+3,candyY);
	textcolor(RED);
	cprintf("0"); //calling of function

	gotoxy(boxX,boxY);
	textcolor(RED);
	cprintf("#");

	gotoxy(boxX+7,boxY);
	cprintf("#");

	gotoxy(boxX,boxY-1);
	cprintf("#");

	gotoxy(boxX+7,boxY-1);
	cprintf("#");

	gotoxy(boxX+7,boxY);
	printf("#");

	gotoxy(boxX,boxY+1);
	cprintf("########");


	if(kbhit())
		{
		ch=getch();
		switch(ch)
			{
			case 'a' : if (boxX>1)
				     {
				      boxX--;
				     }
				   break;
			case 'A' :if (boxX>1)
				     {
				      boxX--;
				     }
				  break;
			case 'd' : if(boxX<73)
				    {
				    boxX++;
				    }
				   break;
			case 'D' : if(boxX<73)
				    {
				    boxX++;
				    }
				   break;
			case 'x' : exit(0);
			case 'X' : exit(0);
			} //end of switch
		}
	 candyY++;
	 if(candyY==20)
		{
		d=candyX-boxX;
		if(d>=1 && d<=6)
			{
			score++;
			}
			else
			{
			lifeline--;
			if(lifeline==0)
				{
				clrscr();
				gotoxy(40,13);
				cprintf("Game Over");
				getch();
				exit(0);
				}
			}
		candyX=rand()%80+1;
		candyY=2;
		}
	 delay(200);
	 goto start;
}

