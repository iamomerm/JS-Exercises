/* JavaScript Exercises */

/* 1 */
function Factorial(Number)
{
	if (Number != 1) { Number = Number * Factorial(Number - 1); }
	
	return Number;
}

console.log('Factorial: ' + Factorial(5));

/* 2 */
function Sum(Start, End)
{
	let aSum = 0;
	
	if (Start != End) { aSum = aSum + Start + Sum(Start + 1, End); }
	
	return aSum;
}

console.log('Sum: ' + Sum(2,7));

/* 3 */
function MinimumInArray(Array, Size)
{
	let aMinimum = Array[Size - 1];
	
	let Current;
	
	if (Size != 1) { Current = MinimumInArray(Array, Size - 1); } 
		
	if  (Current < aMinimum) { aMinimum = Current; }
	
	return aMinimum;
}

console.log('Minimum in Array: ' + MinimumInArray([520,-5,112,34,6,90,1300], 7));

/* 4 */
function SumOfArray(Array, Size)
{
	let Sum = 0;
	
	if (Size != 0) { Sum = Sum + Array[Size - 1] + SumOfArray(Array, Size - 1); }
	
	return Sum;
}

console.log('Sum of Array: ' + SumOfArray([1,2,3,4,-10], 5));

/* 5 */
function Palindrome(Array, Size)
{
	let Return = (Array[0] - Array[Size - 1] == 0);
	
	if ((Return == true) && (Size != 1))
	{ 
		nArray = Array.slice(1, Size);
		
		Return = Palindrome(nArray, Size - 2); 
	}
			
	return Return;
}

console.log('Palindrome: ' + Palindrome([1,2,3,4,5,4,3,2,1], 9));

/* 6 */
function Range(Start, End)
{
	let Array = [Start];
	
	if (Start != End) { Array = Array.concat(Range(Start + 1, End)); }
	
	return Array;
}

console.log('Range: ' + Range(2,8));

/* 7 */
function BinarySearch(Array, Value)
{
	MidPoint = Math.floor(Array.length / 2);
	
	let Return = Array[MidPoint] == Value;

	if ((Array[MidPoint] > Value) && (MidPoint > 0)) { Return = BinarySearch(Array.slice(0, MidPoint), Value); }
	
	else if ((Array[MidPoint] < Value) && (MidPoint > 0)) { Return = BinarySearch(Array.slice(MidPoint, Array.length), Value); }
	
	return Return;
}

console.log('Binary Search: ' + BinarySearch([10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160], 140));

/* 8 */
function ClassicBubbleSort(Array) /* Classic */
{
	for (I = 0; I < Array.length; I++)
	{		
		for(J = 0; J < Array.length; J++)
		{
			if (Array[J] > Array[J + 1]) 
			{
				let Temp = Array[J + 1];
				
				Array[J + 1] = Array[J];
				
				Array[J] = Temp;
			}
		}
	}
	
	return Array;
}

function BubbleSort(Array) /* Recursive */
{
	for (I = 0; I < Array.length; I++)
	{	
		if (Array[I] > Array[I + 1]) 
		{
			let Temp = Array[I + 1];
			
			Array[I + 1] = Array[I];
			
			Array[I] = Temp;
			
			BubbleSort(Array);
		}
	}
	
	return Array;
}

console.log('Classic Bubble Sort: ' + ClassicBubbleSort([1,14,33,17,49, -11, 44,28,0]));

console.log('Bubble Sort: ' + BubbleSort([1,14,33,17,49, -11, 44,28,0]));

/* 9 */
function LinearSearch(Array, Value, StartIndex)
{	
	let Return = (Array[StartIndex] == Value);
	
	if ((Array[StartIndex] != Value) && (StartIndex < Array.length)) { Return = LinearSearch(Array, Value, StartIndex + 1); }

	return Return;
}

console.log('Linear Search: ' + LinearSearch([1,2,3,4,5,6,7,8,9,10,11,12,13], 122, 0));

/* 10 */
function JumpSearch(Array, Value) /* Classic */
{	
	let Index = 0;
	
	Jump = Math.floor(Math.sqrt(Array.length));
	
	while ((Index < Array.length) && (Index >= 0))
	{
		if (Array[Index] == Value) { return true; }
		
		else if (Array[Index] < Value) 
		{ 
			if ((Index + Jump) < Array.length) { Index = Index + Jump; }
			
			else { Index++; }; 
		}
		
		else if (Array[Index] > Value) { Index--; }
	}
	
	return false;
}

console.log('JumpSearch: ' + JumpSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 10));
