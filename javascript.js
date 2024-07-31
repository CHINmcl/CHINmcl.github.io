const canvas = document.getElementById("tetris-board");
const ctx = canvas.getContext("2d");
const nextPieceCanvas = document.getElementById("next-piece");
const nextPieceCtx = nextPieceCanvas.getContext("2d");
const scoreElement = document.getElementById("score-value");
const startButton = document.getElementById("start-button");
const musicToggle = document.getElementById("music-toggle");

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;
let score = 0;
let board = [];
let currentPiece;
let nextPiece;
let gameInterval;
let gameRunning = false;
const GAME_SPEED = 500;

const sounds = {
	move: new Howl({ src: [""] }),
	rotate: new Howl({ src: [""] }),
	drop: new Howl({ src: ["https://cdn.freesound.org/previews/492/492883_3206727-lq.mp3"] }),
	clearLine: new Howl({ src: ["https://cdn.freesound.org/previews/702/702515_321967-lq.mp3"] }),
	gameOver: new Howl({ src: ["https://cdn.freesound.org/previews/382/382310_5421751-lq.mp3"] }),
	backgroundMusic: new Howl({ src: ["https://archive.org/download/TetrisThemeMusic/Tetris.mp3"],
		loop: true,
		volume: 0.5
	})
};

const COLORS = [
	"#FF0000", // Red
	"#00FF00", // Green
	"#0000FF", // Blue
	"#FFFF00", // Yellow
	"#FF00FF", // Magenta
	"#00FFFF", // Cyan
	"#FFA500" // Orange
];

const pieces = [
	{ shape: [[1, 1, 1, 1]], color: 0 },
	{
		shape: [
			[1, 1],
			[1, 1]
		],
		color: 1
	},
