using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LightAnim : MonoBehaviour {

    Light light;
    protected int timer = 0;

    public float intensity = 1f;
    public float offset = 1f;
    public float amplitude = 0.5f;

	// Use this for initialization
	void Start () {
        light = GetComponent<Light>();
	}
	
	// Update is called once per frame
	void Update () {
        timer++;
        light.intensity = (Mathf.Cos(timer*intensity)+offset)*amplitude;
	}
}
