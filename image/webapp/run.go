package main

import (
    "net/http"
    "fmt"
    "bufio"
    "os"
    "os/exec"
)

func main() {
        http.Handle("/", http.FileServer(http.Dir("./public")))
        http.HandleFunc("/api", ApiHandler) // homepage
        http.ListenAndServe(":9090", nil)
}

// handle ajax-post-request
func ApiHandler(w http.ResponseWriter, r *http.Request) {
    r.ParseForm()
    rawModel := r.Form["raw_model"]
    rawData := r.Form["raw_data"]

    writeLines(rawModel,"request.mod")
    writeLines(rawData,"request.dat")

    exec.Command("/bin/bash", "solve.sh").Output()

    var rawSolution, _ = readLines("request.sol");

    for _, line := range rawSolution {
        fmt.Fprintf(w, "%s\n", line)
    }

} 


// writeLines writes the lines to the given file.
func writeLines(lines []string, path string) error {
  file, err := os.Create(path)
  if err != nil {
    return err
  }
  defer file.Close()

  w := bufio.NewWriter(file)
  for _, line := range lines {
    fmt.Fprintln(w, line)
  }
  return w.Flush()
}

// read lines from file
func readLines(path string) ([]string, error) {
  file, err := os.Open(path)
  if err != nil {
    return nil, err
  }
  defer file.Close()

  var lines []string
  scanner := bufio.NewScanner(file)
  for scanner.Scan() {
    lines = append(lines, scanner.Text())
  }
  return lines, scanner.Err()
}