#include <stdbool.h>
#include <stdio.h>

bool isValidSudoku(char** board, int boardSize, int* boardColSize) {
    for (int i = 0; i < boardSize; i++) {
        bool seen[10] = {false};
        for (int j = 0; j < *boardColSize; j++) {
            char c = board[i][j];
            if (c != '.') {
                int digit = c - '0';
                if (digit < 1 || digit > 9) return false;
                if (seen[digit]) return false;
                seen[digit] = true;
            }
        }
    }
    for (int j = 0; j < *boardColSize; j++) {
        bool seen[10] = {false};
        for (int i = 0; i < boardSize; i++) {
            char c = board[i][j];
            if (c != '.') {
                int digit = c - '0';
                if (digit < 1 || digit > 9) return false;
                if (seen[digit]) return false;
                seen[digit] = true;
            }
        }
    }
    for (int i = 0; i < 9; i = i + 3) { // Start row: 0, 3, 6
        for (int j = 0; j < 9; j = j + 3) { // Start column: 0, 3, 6
            bool seen[10] = {false};
            for (int m = 0; m < 3; m++) { // Row offset: 0, 1, 2
                for (int n = 0; n < 3; n++) { // Column offset: 0, 1, 2
                    char c = board[i + m][j + n];
                    if (c != '.') {
                        int digit = c - '0';
                        if (digit < 1 || digit > 9) return false;
                        if (seen[digit]) return false;
                        seen[digit] = true;
                    }
                }
            }
        }
    }
    return true;
}

char* board[] = {
    "53..7....",
    "6..195...",
    ".98....6.",
    "8...6...3",
    "4..8.3..1",
    "7...2...6",
    ".6....28.",
    "...419..5",
    "....8..79"
};
int colSize = 9;

int main() {
    printf("%d\n", isValidSudoku(board, 9, &colSize));
}