import { v4 as uuidv4 } from 'uuid';

const musicDB = () => {
	return [
		{
			name: 'Find a Way',
			artist: 'THE DLX',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1791/1791799/covers/1.600.jpg?du=1604099047',
			color: ['#f7c1df', '#775983', '#1A0910'],
			audio: 'https://mp3d.jamendo.com/?trackid=1791799&format=mp32&from=Xik2bdK9AmJatdiMoDZ/ig==|Vf9xMrYD/BN5HwfdcfTaLQ==',
			active: true,
			genre: 'rap',
			liked: false
		},
		{
			name: 'Criminal',
			artist: 'AXL & ARTH',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1785/1785168/covers/1.600.jpg?du=1602542909',
			color: ['#b191c7', '#222d3a', '#FAF9F7'],
			audio: 'https://mp3d.jamendo.com/?trackid=1785168&format=mp32&from=hF3l0OK8p8x/f5QOEiIGmQ==|gfGEeugjj8GwNOtiGcq4lg==',
			active: false,
			genre: 'trap',
			liked: false
		},
		{
			name: 'Versace',
			artist: 'THE SAME PERSONS',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1793/1793600/covers/1.600.jpg?du=1608134132',
			color: ['#04c7f5', '#f7629a', '#FEE3B3'],
			audio: 'https://mp3d.jamendo.com/?trackid=1793168&format=mp32&from=fKKfZWJoMFHefr8ssKOKmQ==|Senzg9kiAO5NVbowGlD8YQ==',
			active: false,
			genre: 'rock',
			liked: false
		},
		{
			name: 'Palmo X & PAtiloe - Overthink',
			artist: 'PALMO X',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1776/1776454/covers/1.600.jpg?du=1593804068',
			color: ['#545897', '#be72eb', '#9D7F1'],
			audio: 'https://mp3d.jamendo.com/?trackid=1776454&format=mp32&from=eCBPXCv2lX91E0HeyNZhnA==|0UIko+stUf89AZQtvHFFyQ==',
			active: false,
			genre: 'trap',
			liked: false
		},
		{
			name: 'Clockwork',
			artist: 'GLASS VIOLET',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1773/1773247/covers/1.600.jpg?du=1602340578',
			color: ['#7D7D7D', '#333432', '#CECDCB'],
			audio: 'https://mp3d.jamendo.com/?trackid=1773247&format=mp32&from=Sx9e2xrdNoL/USbEWuRtNQ==|JYUk9pwtnSYnkqCW9y4/+Q==',
			active: false,
			genre: 'rock',
			liked: false
		},
		{
			name: 'Just Yet',
			artist: 'EVAN ANDERSON',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1775/1775901/covers/1.600.jpg?du=1593608566',
			color: ['#72AB8A', '#354B3E', '#CCE3D6'],
			audio: 'https://mp3d.jamendo.com/?trackid=1775901&format=mp32&from=aUjVvWlyEdmpnwent/ibQw==|Dbxd+cVNo8zJQeI50C+Pow==',
			active: false,
			genre: 'rap',
			liked: false
		},
		{
			name: "Safe and Warm in Hunter's Arms",
			artist: 'ROLLER GENOA',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/albums/s156/156032/covers/1.600.jpg?du=1530002345',
			color: ['#EDEDED'],
			audio: 'https://mp3d.jamendo.com/?trackid=1314412&format=mp32&from=hXlghWFVyMnPL/kF1Yaxxw==|m/6uwq8JtTvmeCv5ZCzjAA==',
			active: false,
			genre: 'rock',
			liked: false
		},
		{
			name: 'Girl Like You',
			artist: 'THE SPIN WIRES',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/albums/s170/170073/covers/1.600.jpg?du=1554768557',
			color: ['#70FB07'],
			audio: 'https://mp3d.jamendo.com/?trackid=1466886&format=mp32&from=8J79CndPEtQeb/Fh3oLjDg==|zC1bgZQd51UYNQop40zFVQ==',
			active: false,
			genre: 'rock',
			liked: false
		},
		{
			name: "That's What They All Say",
			artist: 'SAMIE BOWER',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1730/1730659/covers/1.600.jpg?du=1582093955',
			color: ['#DD62A2'],
			audio: 'https://mp3d.jamendo.com/?trackid=1730659&format=mp32&from=3qRkhgAaqfamAin59SnZUQ==|FsmlaMNQCM+w80YqhWtiSQ==',
			active: false,
			genre: 'rap',
			liked: false
		},
		{
			name: 'Trap',
			artist: 'ADI RAMBO',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1819/1819490/covers/1.600.jpg?du=1609245425',
			color: ['#A8A8A8'],
			audio: 'https://mp3d.jamendo.com/?trackid=1819490&format=mp32&from=LNO7HSZpMbLwbQHkE3BVdA==|RfkhiVWk42O+zlapZfK+7g==',
			active: false,
			genre: 'trap',
			liked: false
		},
		{
			name: 'Breath',
			artist: 'AXL & ARTH',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1342/1342479/covers/1.600.jpg?du=1529910968',
			color: ['#271061'],
			audio: 'https://mp3d.jamendo.com/?trackid=1342479&format=mp32&from=v1T8M/PPev8w483P8uWVcg==|T6iiRTZhvjxfGJcO74VLXw==',
			active: false,
			genre: 'trap',
			liked: false
		},
		{
			name: 'Save It Heaven',
			artist: 'SUMMER ASH',
			id: uuidv4(),
			cover: 'https://images.jamendo.com/tracks/s1759/1759585/covers/1.600.jpg?du=1588571113',
			color: ['#C37335'],
			audio: 'https://mp3d.jamendo.com/?trackid=1759585&format=mp32&from=nU91248iZW77MSQz0pij9w==|zs8zYCfR/A6yENKORFwQsg==',
			active: false,
			genre: 'rap',
			liked: false
		},

	]
}

export default musicDB;