
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
}`,`void MNISTReader::loadLabels(const char * filename, std::vector<int>& labelArray)
{
	uint32_t labelNum;

	_sopen_s(&fh, filename, _O_BINARY, SH_DENYWR, _O_RDONLY);
	avail = _read(fh, buf, SIZE);

	current = buf;

	//Skip the magic number (4 bytes)
	skip(4);

	//Read # of Images
	labelNum = readNextInt();


	labelArray = std::vector<int>(labelNum);
	int count;

	for (int labelsRead = 0; labelsRead < labelNum; labelsRead += count) {
		count = avail;
		for (int j = 0; j < count; j++) {
			labelArray[j + labelsRead] = ((int)readNextByte());
		}
		readNextChunk();
	}
	_close(fh);
}`,`private void constructCurve() 
{
    curvePoints.clear();
    bezierCurve.clear();

    for (int i = 0; i <= currentPoint; i++) {
        int tempCurrent = currentPoint;
        currentPoint = i;
        updateConnections();
        currentPoint = tempCurrent;

        double x = intermediateLines.getLast().getStartX() + ((intermediateLines.getLast().getEndX() - intermediateLines.getLast().getStartX()) * i / smoothness);
        double y = intermediateLines.getLast().getStartY() + ((intermediateLines.getLast().getEndY() - intermediateLines.getLast().getStartY()) * i / smoothness);
        curvePoints.add(new Point(x, y));
    }

    for (int i = 0; i < curvePoints.size() - 1; i++) {
        double startX = curvePoints.get(i).x;
        double startY = curvePoints.get(i).y;
        double endX = curvePoints.get(i + 1).x;
        double endY = curvePoints.get(i + 1).y;

        Line line = new Line(startX, startY, endX, endY);
        line.setStroke(curveColor);
        bezierCurve.add(line);
    }

    buildGroup();
}`]


projectData = `[{"projectName" : "Rubik's Cube V2", "projectDescription" : "Rubiks cube app written in Java that includes Real world cube recognition and Rubiks cube solver. With this a user can scan in their Rubik's Cube and recieve a step by step solution to how to solve it accompanied by a visual of a 3D Rubik's Cube.", "mediaAddress" : "res/smile.jpg", "githubLink" : "https://github.com/itaybachar/RubiksCubeV2"},
{"projectName" : "First ANN", "projectDescription" : "My first Artificial Neural Network written from scratch in C++. This is a very simplistic Network which has been trained on the MNIST dataset with 95% accuracy.", "mediaAddress" : "res/smile.jpg", "githubLink" : "https://github.com/itaybachar/First-ANN"},
{"projectName" : "MNIST-Reader", "projectDescription" : "MNIST Dataset reader written in C++ focused on high preformance. This dataset was used to train my first neural network", "mediaAddress" : "res/smile.jpg", "githubLink" : "https://github.com/itaybachar/MNIST-Reader/"},
{"projectName" : "Bezier Curve", "projectDescription" : "A Bezier Curve application written in Java. This does not uses the mathematical equation but it visualizes the curve using the logic of how the curve is made up.", "mediaAddress" : "res/smile.jpg", "githubLink" : "https://github.com/itaybachar/Bezier-Curve"}]`;