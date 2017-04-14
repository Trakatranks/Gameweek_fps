using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LevelRotation : MonoBehaviour {
    Transform tfm;
    public float coeff = 1f;

    // Use this for initialization
    void Start () {
        tfm = GetComponent<Transform>();
	}
	
	// Update is called once per frame
	void Update () {
        tfm.Rotate(new Vector3(0, coeff, 0));
	}
}
