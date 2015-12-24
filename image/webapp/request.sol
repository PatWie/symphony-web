
==  Welcome to the SYMPHONY MILP Solver 
==  Copyright 2000-2015 Ted Ralphs and others 
==  All Rights Reserved. 
==  Distributed under the Eclipse Public License 1.0 
==  Version: 5.6.13 
==  Build Date: Dec 24 2015 
==  Revision Number: 2536 

Reading input file...

Reading model section from request.mod...
request.mod:19: warning: unexpected end of file; missing end statement inserted
19 lines were read
Reading data section from request.dat...
request.dat:34: warning: unexpected end of file; missing end statement inserted
34 lines were read
Generating totalPref...
Generating exactly_one_group...
Generating min3...
Generating max4...
Model has been successfully generated

Automatically setting number of threads to 2

Starting Preprocessing...
Preprocessing finished...
 	 with no modifications...
Problem has 
	 44 constraints 
	 224 variables 
	 672 nonzero coefficients

Total Presolve Time: 0.009149...

Solving...


****************************************************
* Optimal Solution Found                           *
* Now displaying stats and best solution found...  *
****************************************************

======================= CP Timing ===========================
  Cut Pool                  0.000
====================== LP/CG Timing =========================
  LP Solution Time          0.002
  LP Setup Time             0.000
  Variable Fixing           0.000
  Pricing                   0.000
  Strong Branching          0.000
  Separation                0.000
  Primal Heuristics         0.000
  Communication             0.000
  Total User Time              0.006
  Total Wallclock Time         0.016

====================== Statistics =========================
Number of created nodes :       1
Number of analyzed nodes:       1
Depth of tree:                  0
Size of the tree:               1
Number of solutions found:      1
Number of solutions in pool:    1
Number of Chains:               1
Number of Diving Halts:         0
Number of cuts in cut pool:     0
Upper Bound in Root:            180.000

======================= LP Solver =========================
Number of times LP solver called:                 1
Number of calls from feasibility pump:            0
Number of calls from strong branching:            0
Number of solutions found by LP solve:            1
Number of bounds changed by strong branching:     0
Number of nodes pruned by strong branching:       0
Number of bounds changed by branching presolver:  0
Number of nodes pruned by branching presolver:    0

==================== Primal Heuristics ====================
                             Time      #Called   #Solutions
Rounding I                   0.00                           
Rounding II                  0.00                           
Diving                       0.00 
Feasibility Pump             0.00 
Local Search                 0.00            1            0 
Restricted Search            0.00 
Rins Search                  0.00 
Local Branching              0.00 

=========================== Cuts ==========================
Accepted:                         0
Added to LPs:                     0
Deleted from LPs:                 0
Removed because of bad coeffs:    0
Removed because of duplicacy:     0
Insufficiently violated:          0
In root:                          0

Time in cut generation:              0.00
Time in checking quality and adding: 0.00

                   Time     #Called     In Root       Total
Gomory             0.00 
Knapsack           0.00 
Clique             0.00 
Probing            0.00 
Flowcover          0.00 
Twomir             0.00 
Oddhole            0.00 
Mir                0.00 
Rounding           0.00 
LandP-I            0.00 
LandP-II           0.00 
Redsplit           0.00 

===========================================================
Solution Found: Node 0, Level 0
Solution Cost: 180.0000000000
+++++++++++++++++++++++++++++++++++++++++++++++++++
Column names and values of nonzeros in the solution
+++++++++++++++++++++++++++++++++++++++++++++++++++
assign[Allen,H1]                                   1.0000000000
assign[Black,H2]                                   1.0000000000
assign[Chung,H2]                                   1.0000000000
assign[Clark,A]                                    1.0000000000
assign[Conners,A]                                  1.0000000000
assign[Cumming,RB]                                 1.0000000000
assign[Demming,SC]                                 1.0000000000
assign[Eng,ED]                                     1.0000000000
assign[Farmer,EZ]                                  1.0000000000
assign[Forest,ED]                                  1.0000000000
assign[Goodman,A]                                  1.0000000000
assign[Harris,SC]                                  1.0000000000
assign[Holmes,ED]                                  1.0000000000
assign[Johnson,H1]                                 1.0000000000
assign[Knorr,RB]                                   1.0000000000
assign[Manheim,RB]                                 1.0000000000
assign[Morris,G]                                   1.0000000000
assign[Nathan,EZ]                                  1.0000000000
assign[Neuman,A]                                   1.0000000000
assign[Patrick,EZ]                                 1.0000000000
assign[Rollins,H2]                                 1.0000000000
assign[Schuman,SC]                                 1.0000000000
assign[Silver,SC]                                  1.0000000000
assign[Stein,H2]                                   1.0000000000
assign[Stock,H1]                                   1.0000000000
assign[Truman,G]                                   1.0000000000
assign[Wolman,ED]                                  1.0000000000
assign[Young,G]                                    1.0000000000

