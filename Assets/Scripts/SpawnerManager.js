#pragma strict

var spawner : GameObject[];

var timeActivationSpawner : float[];
private var timer : int;

var activeSpawnerIndex;
var nbActiveSpawner : int;

function Start () {

}
	

function Update () {
	if(nbActiveSpawner != spawner.length){

			if(timer == timeActivationSpawner[nbActiveSpawner]){
				
				ActivateOneSpawner();
				nbActiveSpawner += 1;
			}
	}
	
	timer++;
}

function ActivateOneSpawner(){
	
	activeSpawnerIndex = Mathf.Floor(Random.Range(0.0f, spawner.length));
	
	

	if(!spawner[activeSpawnerIndex].active){
		spawner[activeSpawnerIndex].SetActive(true);
	}
	else{
		ActivateOneSpawner();
	}
}
