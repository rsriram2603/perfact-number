let a=[1,2,3,45,6,78,865,4,3,2,246,7,8,9,];
function perfactNum(a)
{
	let number;
	let perfact=a[0];
	for(i=0;i<a.length;i++)
	{
		number=a[i];
		var k=0;
		for(j=0;j<number;j++)
		{
			if(number%j==0)
			{
				k+=j;
			}
		}
	        if(k=number)
			{
				perfact.push(number);
			}
	}
	return perfact;
}
console.log((perfactNum(a)));
	