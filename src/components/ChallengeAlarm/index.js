import React from 'react'

import './style.css'

import {ReactComponent as ClockBottom} from 'assets/clockBottom.svg';

//import {ReactComponent as ClockLeftGray} from 'assets/clockLeftGray.svg';
//import {ReactComponent as ClockMiddleGray} from 'assets/clockMiddleGray.svg';
//import {ReactComponent as ClockRightGray} from 'assets/clockRightGray.svg';

//import ClockLeftRed from 'assets/clockLeftRed.png';
//import ClockMiddleRed from 'assets/clockMiddleRed.png';
//import ClockRightRed from 'assets/clockRightRed.png';



class ChallengeAlarm extends React.Component {
  
  left=false;
  middle=false;
  right=false;
  gameRunning=false;
  
  countMissed=0;
  countHit=0;
  
  currentRound=0;
  
  numberOfRounds=10;
  gameSpeed=1000;
  
  
  allOff()
  {
	  this.left=false;
	  this.middle=false;
	  this.right=false;
  }
  
  resetGame()
  {
	  this.allOff();
	  this.countMissed=0;
      this.countHit=0;
	  this.forceUpdate();
  }
  
  
	checkForFail()
	{
	  if( this.countMissed + this.countHit < this.currentRound )
	  {
		  this.countMissed = this.currentRound - this.countHit;
	  }
	}
	  
	checkForHit()
	{
	  if( this.countMissed + this.countHit < this.currentRound )
	  {
		  this.countHit = this.currentRound - this.countMissed;
	  }
	}
  
  leftPress()
  {
	  if(this.left)
	  {
		  this.checkForHit();
	  }
	  else
	  {
		  this.checkForFail();
	  }  
	  this.left=false;
	  this.forceUpdate();
  }

  middlePress()
  {
	  if(this.middle)
	  {
		  this.checkForHit();
	  }
	  else
	  {
		  this.checkForFail();
	  }  
	  this.middle=false;
	  this.forceUpdate();
  }
  
  rightPress()
  { 
	  if(this.right)
	  {
		  this.checkForHit();
	  }
	  else
	  {
		  this.checkForFail();
	  }  
	  this.right=false;
	  this.forceUpdate();
  }
    
	sleep(ms) {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}
	
	
	random13() {
	  return Math.floor((Math.random() * 3) + 1);
	}
	
	
  async startGame()
  {
	  if(!this.gameRunning)
	  {
		  this.gameRunning=true;
		  this.resetGame();
		  
			this.currentRound = 0;
			do {
			  this.currentRound++;
			  
			  var btn = this.random13()
			  console.log(btn);
			  
			  if(btn==1)
			  {
				  this.left=true;
			  }
			  
			  if(btn==2)
			  {
				  this.middle=true;
			  }
			  
			  if(btn==3)
			  {
				  this.right=true;
			  }
			  
			  this.forceUpdate();
			  
		      await this.sleep(this.gameSpeed);
			  this.checkForFail();
			  this.allOff();
			} while (this.currentRound < this.numberOfRounds);
		  
		  
		  this.gameRunning=false;
	  }
  }
  
  render () {
    return (
		<div className="view" id="game">

		Treffer: {this.countHit}<br/>
		Daneben: {this.countMissed}<br/>

			{
			  (this.left) ?
				<img src="img/clockLeftRed.png" width="33%" onClick={this.leftPress.bind(this)} />
			  :
				<img src="img/clockLeftGray.png" width="33%" onClick={this.leftPress.bind(this)} />
			}
			
			{
			  (this.middle) ?
				<img src="img/clockMiddleRed.png" width="33%" onClick={this.middlePress.bind(this)} />
			  :
				<img src="img/clockMiddleGray.png" width="33%" onClick={this.middlePress.bind(this)} />
			}
			
			{
			  (this.right) ?
				<img src="img/clockRightRed.png" width="33%" onClick={this.rightPress.bind(this)} />
			  :
				<img src="img/clockRightGray.png" width="33%" onClick={this.rightPress.bind(this)} />
			}
			
		
		<ClockBottom id="clockBottom" width="100%" onClick={this.startGame.bind(this)}/>
		
		</div>
    )
  }
}

export default ChallengeAlarm;
