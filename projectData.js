
 codeSnippets = [`public void solveCube() {

     //<editor-fold desc="Set Color of temp cube">
     for (int i = 0; i < 6; i++) {
         for (int j = 0; j < 9; j++) {
             tempRubiksCube[i][j].setColor(rubiksCube.getSticker()[i][j].getColor());
         }
     }
     //</editor-fold>

     solutionSet.resetSet();

     do {
         FirstCross();
         InsertCorners();
         InsertSecondLayer();
         SecondCross();
         OLL();
         Headlights();
         PLL();
         lineUpCube();
     } while(!isCubeSolved());
     rubiksCube.label.setText("Number of moves to solve: " + solutionSet.getSolutionMoves().size());
     //send move set to main cube
     //rubiksCube.doMoves(solutionSet.getSolutionMoves(), solutionSet.getSolutionMovesRotation(), solutionSet.getSolutionLayerNumber());
 }`,`int main() {
	srand(time(NULL));

	std::vector<std::vector<double>> input, output;
	std::vector<double>readOut;
	MNISTReader reader;

	//Loading Learn
	reader.loadImages("train-images.idx3-ubyte",input);
	reader.loadLabels("train-labels.idx1-ubyte", readOut);

	//Loading Test
	//reader.loadImages("t10k-images.idx3-ubyte", input);
	//reader.loadLabels("t10k-labels.idx1-ubyte", readOut);
	

	output = std::vector<std::vector<double>>();
	output.resize(readOut.size());

	for (int i = 0; i < readOut.size();i++) {
		output[i].resize(10);
		output[i][(int)readOut[i]] = 1;
	}

	std::cout << "File Loaded!" << std::endl;


	train("test.txt",input, output,1);
	//test("numbersTrained.txt",input, output);
	
	system("pause");
}`,'One more']


projectData = `[{"projectName" : "Rubik's Cube V2", "projectDescription" : "Rubiks cube app written in Java that includes Real world cube recognition and Rubiks cube solver. With this a user can scan in their Rubik's Cube and recieve a step by step solution to how to solve it accompanied by a visual of a 3D Rubik's Cube.", "mediaAddress" : "res/smile.jpg", "githubLink" : "https://github.com/itaybachar/RubiksCubeV2"},
{"projectName" : "First ANN", "projectDescription" : "My first Artificial Neural Network written from scratch in C++. This is a very simplistic Network which has been trained on the MNIST dataset with 95% accuracy.", "mediaAddress" : "res/smile.jpg", "githubLink" : "www.github.com"},
     {"projectName" : "Neural Net", "projectDescription" : "Neural net written from scratch", "mediaAddress":"res/smile.jpg", "githubLink":"www.github.com"}]`;